import React, { useCallback } from 'react';
import { useGetNetworkConfig } from '@elrondnetwork/dapp-core/hooks';
import { ProxyNetworkProvider } from '@elrondnetwork/erdjs-network-providers';
import {
  Address,
  AddressValue,
  Code,
  CodeMetadata,
  ResultsParser,
  SmartContract,
  TransactionWatcher,
  U8Value
} from '@elrondnetwork/erdjs/out';
import { Button, Grid } from '@mui/material';
import { smartContractCode } from 'helpers/constants';

const DeployNewPoolModal = () => {
  const { network } = useGetNetworkConfig();

  console.log({ network });
  const handleDeployNewPool = useCallback(async () => {
    console.log('Deploying new contract!');

    const buffer = Buffer.from(smartContractCode);
    const code = Code.fromBuffer(buffer);

    const contract = new SmartContract({});
    const quorumTyped = new U8Value(1);
    const boardMembers = [
      new AddressValue(
        new Address(
          'erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteycl'
        )
      )
    ];

    const transaction = contract.deploy({
      code: code,
      codeMetadata: new CodeMetadata(false, true, true),
      initArguments: [quorumTyped, ...boardMembers],
      gasLimit: 20000000,
      chainID: 'T'
    });

    const contractAddress = SmartContract.computeAddress(
      transaction.getSender(),
      transaction.getNonce()
    );

    contract.setAddress(contractAddress);

    const networkProvider = new ProxyNetworkProvider(network.apiAddress);

    await networkProvider.sendTransaction(transaction);
    const transactionOnNetwork = await new TransactionWatcher(
      networkProvider
    ).awaitCompleted(transaction);

    const { returnCode } = new ResultsParser().parseUntypedOutcome(
      transactionOnNetwork
    );

    console.log({ returnCode });
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Button
          color='primary'
          variant='contained'
          fullWidth
          onClick={handleDeployNewPool}
        >
          Deploy
        </Button>
      </Grid>
    </Grid>
  );
};

export default DeployNewPoolModal;

import React, { useCallback } from 'react';
import { useGetNetworkConfig } from '@elrondnetwork/dapp-core/hooks';
import { sendTransactions } from '@elrondnetwork/dapp-core/services';
import {
  getAccount,
  getAddress,
  getChainID
} from '@elrondnetwork/dapp-core/utils';
import {
  Address,
  AddressValue,
  Code,
  CodeMetadata,
  DeployArguments,
  ResultsParser,
  SmartContract,
  TransactionWatcher,
  TypedValue,
  U8Value
} from '@elrondnetwork/erdjs';
import { ApiNetworkProvider } from '@elrondnetwork/erdjs-network-providers';

import { Balance } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import { smartContractCode } from 'helpers/constants';

const DeployNewPoolModal = () => {
  const { network } = useGetNetworkConfig();

  console.log({ network });
  // const handleDeployNewPool = useCallback(async () => {
  //   console.log('Deploying new contract!');

  //   const buffer = Buffer.from(smartContractCode);
  //   const code = Code.fromBuffer(buffer);

  //   const contract = new SmartContract({});
  //   const quorumTyped = new U8Value(1);
  //   const boardMembers = [
  //     new AddressValue(
  //       new Address(
  //         'erd19rh30cq9964an8vj7qnj7gwaus90nv6020vxpu69ramwrn8yr78smteycl'
  //       )
  //     )
  //   ];

  //   const transaction = contract.deploy({
  //     code: code,
  //     codeMetadata: new CodeMetadata(false, true, true),
  //     initArguments: [quorumTyped, ...boardMembers],
  //     gasLimit: 200000000000,
  //     chainID: 'D'
  //   });

  //   const contractAddress = SmartContract.computeAddress(
  //     transaction.getSender(),
  //     transaction.getNonce()
  //   );

  //   contract.setAddress(contractAddress);

  //   console.log(network.apiAddress);

  //   // const networkProvider = new ProxyNetworkProvider(network.apiAddress);
  //   const networkProvider = new ApiNetworkProvider(network.apiAddress);

  //   const transactions = [transaction];
  //   const { sessionId, error } = await sendTransactions({
  //     transactions
  //   });

  //   const { returnCode } = new ResultsParser().parseUntypedOutcome(
  //     transactionOnNetwork
  //   );

  //   console.log({ returnCode });
  // }, []);

  const handleDeployNewPool = async () => {
    function getDeployContractTransaction(
      quorum: number,
      boardMembers: AddressValue[]
    ) {
      const contract = new SmartContract({});
      const code = Code.fromBuffer(Buffer.from(smartContractCode, 'hex'));
      const codeMetadata = new CodeMetadata(false, true, true);
      const quorumTyped = new U8Value(quorum);
      const initArguments: TypedValue[] = [quorumTyped, ...boardMembers];
      const value = '0';
      const deployArguments: DeployArguments = {
        code,
        codeMetadata,
        initArguments,
        value,
        gasLimit: 600000000,
        chainID: 'D'
      };
      return contract.deploy(deployArguments);
    }
    try {
      const address = await getAddress();
      const account = await getAccount(address);

      const multisigAddress = SmartContract.computeAddress(
        new Address(address),
        account?.nonce as any
      );
      const boardMembers = [new AddressValue(new Address(address))];
      const quorum = 1;
      const deployTransaction = getDeployContractTransaction(
        quorum,
        boardMembers
      );

      const transactions = [deployTransaction];
      const { sessionId, error } = await sendTransactions({
        transactions
      });

      return { sessionId, multisigAddress: multisigAddress.bech32(), error };
    } catch (err) {
      throw Error('Error deploying safe!');
    }
  };

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

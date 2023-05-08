//Create the transaction
const transaction = new ContractCreateTransaction()
    .setGas(100_000)
    .setBytecodeFileId(bytecodeFileId);

//Modify the default max transaction fee (default: 1 hbar)
const modifyTransactionFee = transaction.setMaxTransactionFee(new Hbar(16));

//Sign the transaction with the client operator key and submit to a Hedera network
const txResponse = await modifyTransactionFee.execute(client);

//Get the receipt of the transaction
const receipt = await txResponse.getReceipt(client);

//Get the new contract ID
const newContractId = receipt.contractId;
        
console.log("The new contract ID is " +newContractId);
// const transaction =await new ContractCreateTransaction()
.setGas(500);
.setBytecodeFileId(byteCodeFileId)
.setAdminkey(adminKey)
//Get amdin key
transaction.getAdminKey()
const txRponse =await newContractExecuteTransaction(transaction) 
const adminKey='0.0.4579905'
const transaction=await new TopicUpdateTransaction()
.setTopicId('0.0.4579905')
.setSubmitKey(submitKey)
.freezeWith(client);
const signTx=await transaction.sign('')
const newAccount =await new AccountCreateTransaction()
.setKey(newAccountPublic)
.require(adminKey)
.setId(newAccount)
.setSubmitKey(adminKey)
.setUserName(userKey)
.setClient(AuthenticatorAssertionResponse)
.executed(client)
.setInitialBalance(Hbar.fromTinybars)(1000)
const getReceipt =await newAccount.getReceipt(client);
const newAccountId=getReceipt.newAccountId;
console.log('test')


public class lookupRecordsController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetails(String searchKey){
        String search = '%'+searchKey+'%';
        List<Account> listOfAccounts = [Select id,AccountNumber,Name,Industry,Site,AccountSource,Phone from Account where Name Like :search];
        if(listOfAccounts.size()>0){
            return listOfAccounts;
        }else{
            return null;
        }
    }
    @AuraEnabled(cacheable=true)
    public static Account getAccount(String accoundId){
        Account acc = [Select id,AccountNumber,Name,Industry,Site,AccountSource,Phone from Account where id =:accoundId];
        if(acc!=null){
            return acc;
        }else{
            return null;
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDetails(String accoundId){
        List<Contact> listOfContacts = [Select id,Name,AccountId,Email,MobilePhone,Title from Contact where AccountId=:accoundId];
        if(listOfContacts.size()>0 && listOfContacts!=null){
            return listOfContacts;
        }else{
            return null;
        }
    }
}
    


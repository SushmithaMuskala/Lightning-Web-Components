import { LightningElement, wire } from 'lwc';
import getAccountDetails from '@salesforce/apex/lookupRecordsController.getAccountDetails';
import getContactDetails from '@salesforce/apex/lookupRecordsController.getContactDetails';
import getAccount from '@salesforce/apex/lookupRecordsController.getAccount'
const columns = [
    { label: 'Name', fieldName: 'Name', hideDefaultActions: true },
    { label: 'Title', fieldName: 'Title', hideDefaultActions: true },
    { label: 'Email', fieldName: 'Email', hideDefaultActions: true },
    { label: 'Phone', fieldName: 'Phone', hideDefaultActions: true }
];
export default class LookupRecords extends LightningElement {
    searchKey;
    selectAcc = false;
    accountId;
    name;
    accountNumber;
    industry;
    site;
    accountSource;
    phone;
    contacts;
    columns = columns;
    searchAccount(event) {
        this.searchKey = event.detail.value;
    }
    @wire(getAccountDetails, { searchKey: '$searchKey' })
    accounts;
    selectedAccount(event) {
        event.preventDefault();
        this.selectAcc = true;
        //alert('slected account'+event.currentTarget.dataset.accountId );
        this.accountId = event.currentTarget.dataset.accountId;
        getAccount({ accoundId: this.accountId })
            .then(result => {
                console.log('inside account' + result.Name);
                this.name = result.Name;
                this.accountNumber = result.AccountNumber;
                this.industry = result.Industry;
                this.site = result.Site;
                this.accountSource = result.AccountSource;
                this.phone = result.Phone;

            })
            .catch(error => {
                console.log('Error occured' + error.body.message);
            });
        getContactDetails({ accoundId: this.accountId })
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.log('Error occured' + error.body.message);
            });

    }
    handleReset() {
        this.selectAcc = false;
    }
}
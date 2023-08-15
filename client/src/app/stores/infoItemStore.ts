import { makeAutoObservable, observable, runInAction } from "mobx";
import {InfoItemData} from "../models/InfoItemData";
import agent from "../api/agent";

export default class InfoItemStore {
    infoitems: InfoItemData[] = []
    initialLoading = false
    dataSize = this.infoitems.length

    constructor() {
        makeAutoObservable(this);
    }



    get getInfoItems() {
        return Object.entries(this.infoitems);
    }

    

    loadInfoItems = async () =>{
        this.initialLoading = true
        try{
            // console.log("size before fetch:",this.infoitems.length)
            var fetchedinfoitems = await agent.InfoItems.list();
            runInAction(() => {
                
                this.infoitems = fetchedinfoitems
                this.dataSize = this.infoitems.length
                this.initialLoading = false
                console.log("size after fetch:",this.infoitems.length)
            })
            
        }
        catch (error) {
            console.log(error)
            this.initialLoading = false
        }
    }

}

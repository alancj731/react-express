import { makeAutoObservable, runInAction } from "mobx";
import {InfoItemData} from "../models/InfoItemData";
import agent from "../api/agent";

export default class InfoItemStore {
    infoitems: InfoItemData[] = []
    initialLoading = false
    dataSize = this.infoitems.length
    // set initial filterMode to "all", which will be used by InfoFilter and InfoList
    filterMode = { mode: "all" }

    constructor() {
        makeAutoObservable(this);
    }

    get getInfoItems() {
        return Object.entries(this.infoitems);
    }

    set setFilterMode(mode:string){
        this.filterMode.mode = mode
    }


    loadInfoItems = async () =>{
        this.initialLoading = true
        try{
            // console.log("size before fetch:",this.infoitems.length)
            var fetchedinfoitems = await agent.InfoItems.list();
            runInAction(() => {
                
                this.infoitems = [...fetchedinfoitems].sort((a, b) => 
                    new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
                )
                this.dataSize = this.infoitems.length
                

                this.initialLoading = false
                // console.log("size after fetch:",this.infoitems.length)
            })
            
        }
        catch (error) {
            console.log(error)
            this.initialLoading = false
        }
    }

}

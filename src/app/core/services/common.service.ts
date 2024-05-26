import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CommonService { 

    getUserInfoSession() {
        let userInfoStorage = localStorage.getItem("userInfo");
        let userInfo = userInfoStorage != null ? JSON.parse(userInfoStorage) : null;
        return userInfo;
    }

    getToken() {
        let userInfo = this.getUserInfoSession();
        return userInfo ? userInfo.token : null;
    }

    getPersonId() {
        let userInfo = this.getUserInfoSession();
        return userInfo ? userInfo.id : null;
    }

    removeSession() {
        localStorage.removeItem("userInfo");
    }
}
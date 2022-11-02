import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn : 'root'
})
export class BackendApiService {
    URL: string ='http://localhost:8080';
    URL2: string ='http://localhost:8081';
    constructor(private httpclient: HttpClient) { }
    registerUser(registerform: any) {
       return this.httpclient.post(`${this.URL}/register`,registerform,{
            observe: 'body'
        })
    }
    loginUser(loginDetails: any){
        return this.httpclient.post(`${this.URL}/login`,loginDetails,{
            observe : 'body',
            headers: new HttpHeaders().append('accessToken',sessionStorage.getItem('token') || '')
        })
    }
    createrooms(createdroom:any){
        return this.httpclient.post(`${this.URL2}/room`,createdroom,{
            observe:'body'
        })
    }
    searchingrooms(searchingroomdetails:any){
        return this.httpclient.get(`${this.URL2}/rooms/search`,searchingroomdetails)
    }
    reservingroom(detailsOfRoomBooked:any){
        return this.httpclient.post(`${this.URL2}/reservation`,detailsOfRoomBooked)
    }
    reservations(){
        return this.httpclient.get(`${this.URL2}/reservations`,{
            observe: 'body'
        })
    }
    deleteroom(reservationId:string){
        return this.httpclient.get(`${this.URL2}/reservation/${reservationId}`,{
            observe: 'body'
        })
    }
    logout(){
        return this.httpclient.post(`${this.URL2}/logout`,{
            observe: 'body'
        })
    }
}

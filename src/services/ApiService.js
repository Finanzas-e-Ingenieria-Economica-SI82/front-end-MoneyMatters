import axios from 'axios';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const apiClient = axios.create({
	baseURL: "https://moneymatters1.onrender.com/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	getProperties() {
		return apiClient.get("/properties")
	},
	getUser() {
		const currentUserJSON = localStorage.getItem('user-info');
		if (currentUserJSON !== null) {
			const currentUser = JSON.parse(currentUserJSON);
			if (currentUser[0]) {
				const userId = currentUser[0].id;
				const userRef = doc(db, "users", userId);
				return getDoc(userRef)
					.then((docSnapshot) => {
						if (docSnapshot.exists()) {
							const currentUserData = docSnapshot.data();
							return currentUserData;
						} else {
							console.log("User not found in Firestore.");
							return null;
						}
					})
					.catch((error) => {
						console.log(error);
						return null;
					});
			} else {
				return null;
			}
		} else {
			console.log("User info not found in local storage.");
		}
	},

	updateUser(user) {
		return apiClient.put("/users/" + user.id, user)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(error => {
				console.error(error);
				throw error;
			});
	},

	getUserById(id) {
		return apiClient.get("/id/" + id)
	},

	getPropertiesById(id) {
		return apiClient.get("/properties/" + id)
	},

	async getUsers() {
		return apiClient.get("/users?type=${this.type}").then(response => {
			return response.data;
		}).catch(error => {
			console.log(error);
		});
	},

	async getPropertiesByType() {
		return apiClient.get("/properties?type=${this.type}").then(response => {
			return response.data;
		}).catch(error => {
			console.log(error);
		});
	},
	// async register(){
	// 	if( this.username.value!=null || this.password.value!=null){
	// 		let result =await apiClient.get("/users?username=${this.username}&password=${this.password}",
	// 	{
	// 		username: this.username,
	// 		password:this.password
	// 	});
	// 	console.warn(result);
	// 		if(result.status==201){
	// 			alert("Se logeo correctamente.")
	// 			localStorage.setItem("user-info",JSON.stringify(result.data))
	// 			this.$router.push({name:'HomeS'})
	// 		}
	// 	}
	// 	else alert("ERROR username or password")
	// },

	// async login(){
	// 	apiClient.get('/users').then(response =>{
	// 		const users=response.data.users;
	// 		const user=users.find(user=>user.username == this.username && user.password == this.password);
	// 	if(user){
	// 		this.$router.push('/sign-up'); 
	// 	} else {
	// 		alert("Se logeo correctamente.")
	// 		this.error = 'Username or password is incorrect';
	// 	}
	// 	}).catch(error =>{
	// 		console.log(error);
	// 	});
	// }
};

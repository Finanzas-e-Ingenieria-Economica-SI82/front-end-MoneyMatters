import axios from 'axios';

const apiClient = axios.create({
	baseURL: "http://localhost:3000/",
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

	getPropertiesById(id) {
		return apiClient.get("/properties/"+id)
	},

	async getPropertiesByType() {
		return apiClient.get("/properties?type=${this.type}").then(response =>{
			return response.data;
		}).catch(error =>{
			console.log(error);
		});
	},
	async register(){
		if( this.username.value!=null || this.password.value!=null){
			let result =await apiClient.get("/users?username=${this.username}&password=${this.password}",
		{
			username: this.username,
			password:this.password
		});
		console.warn(result);
			if(result.status==201){
				alert("Se logeo correctamente.")
				localStorage.setItem("user-info",JSON.stringify(result.data))
				this.$router.push({name:'HomeS'})
			}
		}
		else alert("ERROR username or password")
	},

	async login(){
		apiClient.get('/users').then(response =>{
			const users=response.data.users;
			const user=users.find(user=>user.username == this.username && user.password == this.password);
		if(user){
			this.$router.push('/sign-up'); 
		} else {
			alert("Se logeo correctamente.")
			this.error = 'Username or password is incorrect';
		}
		}).catch(error =>{
			console.log(error);
		});
	}
};

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Building2 } from "lucide-react";

function Login() {

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error,setError] = useState("");
const [showPassword,setShowPassword] = useState(false);
const [loading,setLoading] = useState(false);

const handleLogin = () => {

setLoading(true);

setTimeout(()=>{

if(email==="test@test.com" && password==="123456"){
navigate("/projects");
}
else{
setError("Invalid email or password");
}

setLoading(false);

},1000);

};

return(

<div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">

<div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">

{/* Logo */}
<div className="flex flex-col items-center mb-6">

<div className="bg-gray-900 p-3 rounded-full text-white mb-3">
<Building2 size={28}/>
</div>

<h1 className="text-2xl font-semibold text-gray-800">
Construction Manager
</h1>

<p className="text-gray-500 text-sm">
Sign in to your account
</p>

</div>

{/* Email */}

<div className="mb-4">

<label className="text-sm text-gray-600">
Email
</label>

<input
type="email"
placeholder="Enter your email"
className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
onChange={(e)=>setEmail(e.target.value)}
/>

</div>

{/* Password */}

<div className="mb-4">

<label className="text-sm text-gray-600">
Password
</label>

<div className="relative">

<input
type={showPassword ? "text" : "password"}
placeholder="Enter your password"
className="w-full mt-1 border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
type="button"
onClick={()=>setShowPassword(!showPassword)}
className="absolute right-2 top-3 text-gray-500"
>

{showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}

</button>

</div>

</div>

{/* Error */}

{error && (
<p className="text-red-500 text-sm mb-3">
{error}
</p>
)}

{/* Login Button */}

<button
onClick={handleLogin}
disabled={loading}
className="w-full bg-gray-900 hover:bg-black text-white p-2 rounded-md font-semibold flex justify-center items-center"
>

{loading ? (
<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
) : (
"Login"
)}

</button>

{/* Test Credentials */}

<p className="text-xs text-gray-500 mt-4 text-center">
Test login → test@test.com / 123456
</p>

</div>

</div>

);

}

export default Login;
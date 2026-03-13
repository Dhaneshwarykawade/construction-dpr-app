import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, CloudSun, Users, ImagePlus, ArrowLeft } from "lucide-react";

function DPRForm(){

const navigate = useNavigate();

const [date,setDate]=useState("");
const [weather,setWeather]=useState("");
const [work,setWork]=useState("");
const [workers,setWorkers]=useState("");
const [images,setImages]=useState([]);
const [error,setError]=useState("");
const [success,setSuccess]=useState("");

const handleSubmit=(e)=>{
e.preventDefault();

if(!date || !weather || !work || !workers){
setError("Please fill all required fields");
return;
}

setError("");
setSuccess("DPR Submitted Successfully");

// Redirect back to projects after submission
setTimeout(()=>{
navigate("/projects");
},1500);

};

const handleImageUpload=(e)=>{
const files = Array.from(e.target.files);

if(files.length > 3){
setError("You can upload maximum 3 images");
return;
}

setImages(files);
};

return(

<div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-6">

<div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

{/* Back Button */}

<button
onClick={()=>navigate("/projects")}
className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-4"
>
<ArrowLeft size={16}/>
Back to Projects
</button>

<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
Daily Progress Report
</h2>

<form onSubmit={handleSubmit} className="space-y-4">

{/* Date */}

<div>
<label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
<CalendarDays size={16}/> Date
</label>

<input
type="date"
className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
onChange={(e)=>setDate(e.target.value)}
/>
</div>

{/* Weather */}

<div>
<label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
<CloudSun size={16}/> Weather
</label>

<select
className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
onChange={(e)=>setWeather(e.target.value)}
>
<option value="">Select Weather</option>
<option>Sunny</option>
<option>Cloudy</option>
<option>Rainy</option>
</select>
</div>

{/* Work Description */}

<div>
<label className="text-sm text-gray-600 mb-1 block">
Work Description
</label>

<textarea
placeholder="Describe work completed today"
className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
rows="4"
onChange={(e)=>setWork(e.target.value)}
/>
</div>

{/* Worker Count */}

<div>
<label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
<Users size={16}/> Worker Count
</label>

<input
type="number"
placeholder="Number of workers"
className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
onChange={(e)=>setWorkers(e.target.value)}
/>
</div>

{/* Image Upload */}

<div>
<label className="text-sm text-gray-600 flex items-center gap-2 mb-2">
<ImagePlus size={16}/> Upload Photos (Max 3)
</label>

<input
type="file"
multiple
onChange={handleImageUpload}
/>

{/* Image Preview */}

<div className="flex gap-3 mt-3">
{images.map((img,index)=>(
<img
key={index}
src={URL.createObjectURL(img)}
alt="preview"
className="w-20 h-20 object-cover rounded-md border"
/>
))}
</div>

</div>

{/* Error */}

{error && (
<p className="text-red-500 text-sm">
{error}
</p>
)}

{/* Success */}

{success && (
<p className="text-green-600 text-sm">
{success}
</p>
)}

{/* Submit */}

<button
type="submit"
className="w-full bg-gray-900 hover:bg-black text-white p-2 rounded-md font-semibold transition"
>
Submit DPR
</button>

</form>

</div>

</div>

);

}

export default DPRForm;
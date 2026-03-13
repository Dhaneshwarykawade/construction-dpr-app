import { useNavigate } from "react-router-dom";
import { MapPin, CalendarDays, Activity } from "lucide-react";

function ProjectCard({ project }) {

const navigate = useNavigate();

const getStatusColor = (status) => {
if(status === "Active") return "bg-green-100 text-green-700";
if(status === "Completed") return "bg-blue-100 text-blue-700";
if(status === "Pending") return "bg-yellow-100 text-yellow-700";
return "bg-gray-100 text-gray-600";
};

return(

<div
onClick={()=>navigate(`/dpr/${project.id}`)}
className="bg-white rounded-xl shadow-md p-5 cursor-pointer border border-gray-200 
hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
>

{/* Project Name */}

<h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
{project.name}
</h3>

{/* Status Badge */}

<span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(project.status)}`}>
{project.status}
</span>

{/* Info Section */}

<div className="mt-4 space-y-2 text-sm text-gray-600">

<div className="flex items-center gap-2">
<CalendarDays size={16} className="text-gray-400"/>
<span>{project.startDate}</span>
</div>

<div className="flex items-center gap-2">
<MapPin size={16} className="text-gray-400"/>
<span>{project.location}</span>
</div>

</div>

{/* Click Hint */}

<div className="mt-4 text-xs text-indigo-500 opacity-0 group-hover:opacity-100 transition">
Click to submit DPR →
</div>

</div>

);

}

export default ProjectCard;
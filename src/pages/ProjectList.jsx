import { useState } from "react";
import projects from "../data/Projects";
import ProjectCard from "../components/ProjectCard";
import { Building2, Search } from "lucide-react";

function ProjectList(){

const [search,setSearch] = useState("");

const filteredProjects = projects.filter(project =>
project.name.toLowerCase().includes(search.toLowerCase())
);

return(

<div className="min-h-screen bg-[#f5f7fb] p-6">

{/* Header */}

<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

<div className="flex items-center gap-3 mb-4 md:mb-0">

<div className="bg-gray-900 text-white p-2 rounded-md">
<Building2 size={22}/>
</div>

<h1 className="text-2xl font-semibold text-gray-800">
Project Dashboard
</h1>

</div>

{/* Search */}

<div className="relative w-full md:w-64">

<input
type="text"
placeholder="Search projects..."
className="w-full border border-gray-300 rounded-md p-2 pl-9 focus:outline-none focus:ring-2 focus:ring-indigo-500"
onChange={(e)=>setSearch(e.target.value)}
/>

<Search
size={18}
className="absolute left-2 top-3 text-gray-400"
/>

</div>

</div>

{/* Projects Grid */}

<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{filteredProjects.length > 0 ? (

filteredProjects.map((project)=>(
<ProjectCard key={project.id} project={project}/>
))

) : (

<p className="text-gray-500">
No projects found
</p>

)}

</div>

</div>

);

}

export default ProjectList;
import EduCategories from "@/data/eduCategories.json"
import Educations from "@/data/educations.json"
import AplicationForm from "./form"
export default function Aplication() {

    
    return (
        <div>
            <AplicationForm eduCategories={EduCategories} educations={Educations}/>
        </div>
    )
}
"use client";
import styles from "@/app/page.module.css";
import { useEffect, useState } from "react";
import SaveApplication from "../../../actions";
import { useFormState } from "react-dom" 

const initialState = {
    errors: {}
}
export default function AplicationForm({ eduCategories, educations }) {
    const [state, formAction ] = useFormState(SaveApplication, initialState)
    const [selectedEducategory, setSelectedEducategory] = useState("")
    const [filteredEducations, setFilteredEducations] = useState(educations)

    useEffect(()=>{
        setFilteredEducations(educations.filter(education => education.categoryId == selectedEducategory))
    },[selectedEducategory])

    const handleSubmit = e => {
        
        console.log("form kaydedildi.");
        
    }
    return (
        <div>
            
            <form  action={formAction} onSubmit={handleSubmit} className={styles.formContainer}>
                {/* <input
                    type="text"
                    className={styles.inputField}
                    placeholder="selam ben input"
                /> */}
                <label htmlFor="category">Bölüm seç</label>
                <select onChange={(e) => setSelectedEducategory(e.target.value)} value={selectedEducategory} className={styles.selectField} name="eduCategory" id="category">
                    <option value="" disabled>lütfen seçiniz</option>
                    {eduCategories.map(e => (
                        <option value={e.id} key={e.id}>{e.name}</option>
                    ))}
                </select>
                {state?.errors?.eduCategory  && (<div className={styles.formError}>{state.errors.eduCategory}</div>)}
                <label htmlFor="education">Eğitim seç</label>
                <select disabled={!selectedEducategory} className={styles.selectField} name="education" id="education">
                    <option value="">{selectedEducategory ? "lütfen seçiniz" : "önce bölüm seçiniz"}</option>
                    {filteredEducations.map(e => (
                        <option value={e.id} key={e.id}>{e.name}</option>
                    ))}
                </select>
                {state?.errors?.education  && (<div className={styles.formError}>{state.errors.education}</div>)}
                <button type="submit">kaydet</button>
            </form>
        </div>
    );
}

"use server"

export default async function SaveApplication(prevState,formData) {
    
    const eduCategory = formData.get("eduCategory")
    const education = formData.get("education")
    console.log(eduCategory);
    console.log(education);
    
    if(!eduCategory){
        return{
            errors:{
                eduCategory: "Bölüm alanı boş olamaz"
            }
        }
    }
    if(!education){
        return{
            errors:{
                education: "Eğitim alanı boş olamaz"
            }
        }
    }
    // if(!eduCategory || !education){
    //     console.log("kaldı");
        
    //     return {
    //         errors: {
    //             eduCategory: "bölüm alanı boş",
    //             education: "eğitim alanı boş"
    //         }
            
            
    //     }   
    // }

    console.log("geçti");
    

}
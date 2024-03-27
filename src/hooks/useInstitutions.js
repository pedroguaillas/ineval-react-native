import { useEffect, useState } from "react"

const useInstitution = () => {

    const [institutions, setInstitutions] = useState(null)

    const fetchInstitutions = async () => {
        const response = await globalThis.fetch('https://inca.evaluacion.gob.ec/api/wssest/amie/01B00020?param1=PRUEBA&param2=ineval2024');
        const json = await response.json()
        setInstitutions(json)
    }

    useEffect(() => {
        fetchInstitutions()
    }, [])

    return { institutions }
}

export default useInstitution;
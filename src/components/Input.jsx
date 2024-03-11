import { useContext } from "react"
import { Context } from "../store/RegistrationContext"

export default function Input({label,id,...props}){
    const {error} = useContext(Context);
    // error variable is conditionally border color ko change karna hai!
    return <>
    <div>
        <label htmlFor="email">{label}</label>
        <input 
        id={id}
        {...props}
        />
        <div>
            {error && <p>{error}</p>}
        </div>
    </div>
    </>
}
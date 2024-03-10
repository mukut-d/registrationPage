export default function Input({label,id,error,...props}){
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
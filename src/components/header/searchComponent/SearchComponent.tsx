import {useForm} from "react-hook-form";


const SearchComponent = ({onSearchChange}:{onSearchChange:(value:string) => void}) => {
    const{register} = useForm();
    const handleChange = (ev: { target: { value: string } }) => {
        const value = ev.target.value;
        onSearchChange(value);
    }
    return (
        <form>
            <input type="text" placeholder={'Search movie'} {...register('search')} onChange={handleChange}/>
        </form>
    );
};

export {SearchComponent};
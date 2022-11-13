import SearchCard from '../../Components/Search-card/Search-card';
import "../../Components/Search-card/Search-card.css";
import { Objects } from './Objects';

const DisplayCards = ({ data }) => {
    return (
        data.foreach(i => {
            Objects.forEach(element => {
                if(element.tags.includes(i)){
                    <SearchCard data={element.tags, element.header, element.name, element.uni, element.club}/>
                }
            })
        })
    )
}

export default DisplayCards
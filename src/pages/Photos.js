import { useContext } from "react"
import Image from "../components/Image"
import { Context } from "../Context"
import {getClass} from "../utilis"
export default function Photos(){
    const {allPhotos} = useContext(Context)
    const imageElement = allPhotos.map((img,i) => {
        return <Image key={img.id} img = {img} className = {getClass(i)} />
    })
    return (
        <main className="photos">
            {imageElement}
        </main>
    )
}
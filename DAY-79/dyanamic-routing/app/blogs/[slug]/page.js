export default function Page({ params }) {

    let language=["python","rust","c","javascript","java"];
    if(language.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Post Not Available</div>
    }
}
import { cutText } from "../../utils/utils"
export const Post = ({title, body, tags, isAuthor, reactions}) => { 
    const textBody = cutText(body, 150)
  return (
    <article className="flex max-w-xl flex-col items-start justify-between" >
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">{title}</h3>
        <p className="mt-5 mb-5 line-clamp-3 text-sm leading-6 text-gray-600">{textBody}</p>
        <div className="mb-5 ">{tags.map((tag, index)=>{return <span key={index} className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>{tag} </span>})}</div>
        <div className="flex justify-between w-full">
           
        {reactions !==0 && <span>{'❤️'} {reactions}</span>}
        { isAuthor && <span>{'✏️' + ' I am author'}</span>}

        </div>
    </article>
  )
}

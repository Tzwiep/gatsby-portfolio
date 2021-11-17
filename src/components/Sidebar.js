import React from 'react'
import { Portrait }  from './Portrait'
import  ContactButtons  from './contactButtons'

 const Sidebar = () => {
    return (
        <div className="fixed flex-col w-2/6 h-full border-black border-r-2">
            <div>
            <h2 className="text-5xl font-black py-4 mt-8 mx-8">Tyler<br/>Zwiep</h2>
            <ContactButtons />
            <p className="text-2xl pl-8 my-2 inline">⬥</p><p className="text-2xl pl-6 my-2 inline">⬥</p> <p className="text-2xl pl-6 my-2 inline">⬥</p><p className="text-2xl pl-6 my-2 inline">⬥</p>
            <p className="mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et malesuada leo, et varius diam. Cras at sapien sed 
                sem interdum viverra eget sed elit. Praesent congue turpis neque, id facilisis arcu tincidunt vitae. Sed non erat posuere, 
                tristique lectus quis, eleifend risus. Aenean et sagittis diam. Aliquam malesuada malesuada felis nec malesuada. 
                Etiam vulputate quam lectus, id interdum mi varius sed. Aenean a lacus fermentum, 
                congue lorem in, lacinia nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                
             </div>
            
             <div className="mt-4">
            <Portrait/>
             </div>
        </div>

    )
}

 export default Sidebar
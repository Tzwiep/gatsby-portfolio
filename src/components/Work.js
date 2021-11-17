import React from 'react'

 const Work = () => {
    return (
        <div className="grid grid-cols-2 gap-4 mb-8 ">

        <div>
        <span className="text-2xl">Caleidoscope</span>
        <table className="table-auto">
        <thead>
        <tr className="border-b-2 border-black">
           
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr className="border-b-2 border-black">
            <th scope="row">role</th>
            <td colspan="2" class="pl-5">Web Design + Development</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">year</th>
            <td colspan="2" class="pl-5">2016-Present</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">http://</th>
            <td colspan="2" class="pl-5"><a href="https://caleidoscopecreative.com/" target="_blank" rel="noreferrer">caleidoscopecreative.com</a></td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">work</th>
            <td colspan="2" class="pl-5">Responsible for various web design and development projects,
                 including regular site uploads and maintenance,
                as well digital media creation and photography projects.</td>
        </tr>
        </tbody>
    </table>
    </div>

    <div>
    <span className="text-2xl">Region of Peel</span>
        <table className="table-auto">
        
        <thead>
        <tr className="border-b-2 border-black">
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr className="border-b-2 border-black">
            <th scope="row">role</th>
            <td colspan="2" class="pl-5">Labourer</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">year</th>
            <td colspan="2" class="pl-5">2011-2019</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">location//</th>
            <td colspan="2" class="pl-5">Mississauga, Ontario</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">work</th>
            <td colspan="2" class="pl-5">Responsible for various web design and development projects,
                 including regular site uploads and maintenance,
                as well digital media creation and photography projects.</td>
        </tr>
        </tbody>
    </table>
    </div>

    </div>

       
    )
}

 export default Work
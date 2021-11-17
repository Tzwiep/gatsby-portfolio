import React from 'react'

 const Education = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mb-8 ">

        <div>
        <span className="text-2xl">Georgian College</span>
        <table className="table-auto">
        <thead>
        <tr className="border-b-2 border-black">
         
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr className="border-b-2 border-black">
            <th scope="row">diploma</th>
            <td colspan="2" class="pl-5">Computer Programmer</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">year</th>
            <td colspan="2" class="pl-5">2019-2021</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">location</th>
            <td colspan="2" class="pl-5">Collingwood, Ontario</td>
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
    <span className="text-2xl">University of Waterloo</span>
        <table className="table-auto">
        <thead>
        <tr className="border-b-2 border-black">
          
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr className="border-b-2 border-black">
            <th scope="row">degree</th>
            <td colspan="2" class="pl-5">BA, Psychology</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">year</th>
            <td colspan="2" class="pl-5">2006-2011</td>
        </tr>
        <tr className="border-b-2 border-black">
            <th scope="row">http://</th>
            <td colspan="2" class="pl-5">Waterloo, Ontario</td>
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

 export default Education
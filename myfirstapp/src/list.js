function List(){
    let trainees=[{
        name:"manasa",
        no:"l0",
        college:"ACET"
       },{
        name:"sai",
        no:"o6",
        college:"ACET"
       },{
        name:"asha",
        no:"k1",
        college:"ACET"
       }
    ]

return(
    <div>
            <ol>
                <li></li>
                <li></li>
                <li></li>
            </ol>
            {trainees.map((val, key) => {
					return (
						< ol>
							<li>{val.name}</li>
							<li>{val.no}</li>
							<li>{val.college}</li>
						</ol>
					)
				})}
    </div>
)
            }
export default List
export const Squares = () => {

    return(
        <section className="flex bg-yellow-200 h-screen w-screen flex-col justify-between">
            
            {/* Line 1 */}
            <div className="flex w-screen h-[30%] bg-red-400 justify-between items-start">
                
                <div className="bg-red-900 h-50 w-50 flex flex-col justify-between items-center">
                    <div className="bg-lime-800 h-15 w-15"></div>
                    <div className="bg-lime-800 h-15 w-15"></div>
                </div>

                <div className="bg-red-900 h-50 w-50 flex justify-center items-center">
                    <div className="bg-lime-800 h-15 w-15"></div>
                </div>

                <div className="bg-red-900 h-50 w-50 flex flex-col justify-between">
                    <div className="bg-lime-800 h-15 w-15"></div>
                    {/* Não pegou just self */}
                    <div className="bg-lime-800 h-15 w-15 self-end"></div> 
                </div>

                <div className="bg-red-900 h-50 w-50 flex justify-start items-start">
                    <div className="bg-lime-800 h-15 w-15"></div>
                </div>
            </div>

            {/* Line 2 */}
            <div className="flex w-screen h-[30%] bg-amber-300 justify-between items-center">
                
                <div className="bg-red-900 h-50 w-50 flex justify-center">
                    <div className="bg-lime-800 h-15 w-15"></div>
                </div>

                <div className="bg-red-900 h-50 w-50 grid grid-cols-2">
                    <div className="bg-lime-800 h-15 w-15 p-4 text-center row-start-1 col-start-2"></div>
                    <div className="bg-lime-800 h-15 w-15 p-4 text-center row-start-2 col-start-1"></div>
                    <div className="bg-lime-800 h-15 w-15 text-center row-start-2 col-start-3"></div>
                    <div className="bg-lime-800 h-15 w-15 text-center row-start-3 col-start-2"></div>
                </div>
                
                <div className="bg-red-900 h-50 w-50 flex justify-center items-start">
                    <div className="bg-lime-800 h-15 w-15 m-5"></div>
                </div>
            </div>

            {/* Line 3 */}            
            <div className="flex w-screen h-[30%] bg-green-800 justify-between items-end">

                <div className="bg-red-900 h-50 w-50 flex flex-col justify-between">
                    {/* justify-self-start não funciona */}
                    <div className="bg-lime-800 h-15 w-15 self-start"></div>
                    <div className="bg-lime-800 h-15 w-15 self-end"></div>
                </div>

                <div className="bg-red-900 h-50 w-50 flex justify-center items-center">
                    <div className="bg-lime-800 h-15 w-15"></div>
                </div>

                <div className="bg-red-900 h-50 w-50 flex justify-end items-start">
                    <div className="bg-lime-800 h-15 w-15"></div>
                </div>
            </div>
        </section>
    )
}
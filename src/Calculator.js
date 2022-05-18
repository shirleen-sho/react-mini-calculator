import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearScreen, updateScreen, seeResult } from './store/calculator/calculatorSlice'

const Cal = () => {
    const dispatch = useDispatch();
    const { screen, result } = useSelector((state) => state.calculator);
    return (
        <div className="calc mx-auto my-10 bg-black rounded-2xl">
            <div className="px-5 pt-16 pb-0 text-white text-right text-4xl">{screen || 0}</div>
            <div className="p-5 text-white text-right text-5xl"><span className="text-orange-500">{result || ''}</span></div>
      
            <div className="flex h-20">
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-black text-2xl font-bold">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-200 hover:bg-neutral-400 justify-center shadow-lg" 
                        onClick={() => dispatch(clearScreen())}
                    >
                    AC
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('('))}
                    >
                        (
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen(')'))}
                    >
                        )
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-5xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-orange-500 hover:bg-orange-700 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('/'))}
                    >
                    ÷
                    </button>
                </div>
            </div>
                
            <div className="flex h-20">
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('7'))}
                    >
                        7
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('8'))}
                    >
                        8
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('9'))}
                    >
                        9
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-5xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-orange-500 hover:bg-orange-700 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('*'))}
                    >
                    ×
                    </button>
                </div>
            </div>
                
            <div className="flex h-20">
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('4'))}
                    >
                    4
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('5'))}
                    >
                    5
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('6'))}
                    >
                    6
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-5xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-orange-500 hover:bg-orange-700 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('-'))}
                    >
                    -
                    </button>
                </div>
            </div>
                
            <div className="flex h-20">
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('1'))}
                    >
                    1
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('2'))}
                    >
                    2
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('3'))}
                    >
                    3
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-5xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-orange-500 hover:bg-orange-700 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('+'))}
                    >
                    +
                    </button>
                </div>
            </div>
                
            <div className="flex h-20 mb-6">
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('/100'))}
                    >
                    %
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('0'))}
                    >
                    0
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-3xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-neutral-800 hover:bg-neutral-900 justify-center shadow-lg" 
                        onClick={() => dispatch(updateScreen('.'))}
                    >
                    .
                    </button>
                </div>
            
                <div className="flex-1 px-2 py-2 flex justify-center items-center text-white text-5xl font-medium">
                    <button 
                        className="rounded-full h-16 w-16 flex items-center bg-orange-600 hover:bg-orange-700 justify-center shadow-lg" 
                        onClick={() => dispatch(seeResult())}
                    >
                    =
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cal;
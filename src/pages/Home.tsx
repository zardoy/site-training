import { Global } from '@emotion/react'
import React from 'react'
import classNames from 'classnames'
import { css } from '@emotion/css'
import Navbar from '../components/Navbar'
import { ArrowForward } from '@mui/icons-material'
import { Loom } from '@icons-pack/react-simple-icons'

interface ComponentProps {}

if (true) await (() => {})

const Home: React.FC<ComponentProps> = () => (
    <>
        <Global styles={{ body: { background: 'black', minHeight: '100vh' } }} />
        <div>
            <Navbar />
            <div className="mt-[160px] flex flex-col items-center text-center">
                <h1 className="title-text">
                    The issue tracking
                    <br />
                    tool you'll enjoy using
                </h1>
                <p className="max-w-3xl text-2xl text-gray-400 mt-9">
                    Linear helps streamline software projects, sprints, tasks, and bug tracking. It's built for high-performance teams.
                </p>
                <button
                    className={classNames({
                        'rounded-lg py-4 transition-shadow duration-300 ease-out px-8 text-xl font-semibold mt-9 shadow-purple-500': true,
                        [css`
                            &:hover {
                                box-shadow: 0 0 20px var(--tw-shadow-color);
                            }
                            /* https://webkul.github.io/coolhue/ */
                            /* 1 */
                            /* background-image: linear-gradient(to right, #43cbff 10%, #9708cc 100%); */
                            background-image: linear-gradient(135deg, #ff6fd8 10%, #3813c2 100%);
                            /* 5 */
                            /* background-image: linear-gradient(to right, #5efce8 10%, #736efe 100%); */
                        `]: true,
                    })}
                    type="button"
                >
                    Sign up for free <ArrowForward />
                </button>
                <img className="mt-16 w-11/12 max-w-[700px] shadow-2xl shadow-purple-400" src="https://linear.app/static/splash/screenshot.jpg?new=true" />
                <div className="w-full h-6 mt-16 bg-gradient-to-b to-neutral-900 from-transparent"></div>
                <div className="w-full pt-8 pb-20 text-center bg-neutral-900">
                    <h4 className="tracking-widest text-indigo-600 ">POWERING THE NEXT GENERATION OF COMPANIES</h4>
                    <div className="flex flex-wrap items-center justify-center max-w-3xl mx-auto space-x-16">
                        {Array(10)
                            .fill({
                                iconComponent: Loom,
                                label: 'loom',
                            })
                            .map(({ iconComponent: IconComponent, label }) => (
                                <div className="mt-9 flex items-center space-x-1.5" key={label}>
                                    <IconComponent className="w-9 h-9" /> <span className="text-2xl font-medium">{label}</span>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="pt-24 bg-[#292929] w-full">
                    <h3 className="text-4xl title-text ">
                        An experience you'd expect from a<br />
                        professional tool.
                    </h3>
                    <h4 className="max-w-3xl mt-8 text-2xl text-gray-400">Opinionated and designed for daily use.</h4>
                    <div className="flex flex-wrap columns-3">{[[null]]}</div>
                </div>
            </div>
        </div>
    </>
)

export default Home

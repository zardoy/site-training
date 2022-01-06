import { css } from '@emotion/css'
import classNames from 'classnames'
import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div
            className={classNames({
                ['h-16 pt-3']: true,
                ['flex justify-between']: false,
                [css`
                    & div {
                        display: inline-block;
                    }
                `]: true,
            })}
        >
            <div className="px-10 font-semibold ">Zardoy</div>
            <div className="text-gray-300">
                <a>Method</a>
            </div>
        </div>
    )
}

export default Navbar

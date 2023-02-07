import clsx from 'clsx'
import { FC } from 'react';

interface Props{
  className: string,
}

const Container:FC<Props> = ({ className, ...props }) =>{
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

export default Container;
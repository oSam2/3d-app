import React from 'react';
import { Button, Popover } from 'antd';

type Props = {
    children: React.ReactNode,
    props: any
}

const PopoverComponent = ({ children, props } : Props) => {
    const { title } = props;

    return (
        <Popover content={children} title={title}>
        <Button type="primary">Info</Button>
      </Popover>
    )
}

export default PopoverComponent;
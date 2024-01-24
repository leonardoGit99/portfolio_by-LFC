import React from 'react'
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function NavMobile({ visible, showDrawer, closeDrawer, items, selectedTab, setSelectedTab }) {
  const burgerButton = [
    { key: "burguerButton", icon: !visible ? <MenuOutlined onClick={showDrawer}/> : null },
  ]
  return (
    <>
      <div className="mobile-menu-icon">
        {burgerButton.map(button => (
          <span key={button.key}>
            {button.icon}
          </span>
        ))}
      </div>
      
      <Drawer
        title="Portfolio LFC"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        open={visible}
        width={200}
      >
        <Menu
          className='nav-mobile'
          items={items}
          mode='vertical'
          onClick={(e) => setSelectedTab(e.key)}
          defaultSelectedKeys={[selectedTab]}
        >
        </Menu>
      </Drawer>

    </>
  )
}

export default NavMobile
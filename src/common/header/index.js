import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button } from './style';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
  }
  handleInputFocus() {
    this.setState({
      focused: true
    })
  }
  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
          <CSSTransition
							in={this.state.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={this.state.focused ? 'focused': ''}
								onFocus={() => this.handleInputFocus()}
								onBlur={this.handleInputBlur.bind(this)}
							></NavSearch>
						</CSSTransition>
            <span className="iconfont">&#xe62b;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe61c;</span>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
export default Header;

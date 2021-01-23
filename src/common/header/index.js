import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button,
} from './style';
const getListArea = (show,pageList) => {
  if(show) {
    return (
      <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>
                换一批
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
						{pageList}
					</SearchInfoList>
          </SearchInfo>
    )
  } else{
    return null;
  }
}
const Header = (props) => {
  const newList = ['list.toJS()'];
  const pageList = [];

		if (newList.length) {
			// for (let i = (page - 1) * 10; i < page * 10; i++) {
			// 	pageList.push(
			// 		<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
			// 	)
      // }
      pageList.push(
        <SearchInfoItem key={newList[0]}>{newList[0]}</SearchInfoItem>
      )
		}
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
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className="iconfont">&#xe62b;</span>
         {getListArea(props.focused,pageList)}
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
};
// class Header extends Component {
//   render() {
//     return (
//       <HeaderWrapper>
//         <Logo href="/" />
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载</NavItem>
//           <NavItem className="right">登录</NavItem>
//           <NavItem className="right">
//             <span className="iconfont">&#xe636;</span>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
//               <NavSearch
//                 className={this.props.focused ? 'focused' : ''}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//               ></NavSearch>
//             </CSSTransition>
//             <span className="iconfont">&#xe62b;</span>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className="writting">
//             <span className="iconfont">&#xe61c;</span>写文章
//           </Button>
//           <Button className="reg">注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     );
//   }
// }
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // state.get('header').get('focused'),
  };
};
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = actionCreator.searchFocus();
      dispatch(action);
    },

    handleInputBlur() {
      const action = actionCreator.searchBlur();
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Header);

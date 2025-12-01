function customRender(eleReact, container){
    // const domEle = document.createElement(eleReact.type)
    // domEle.innerHTML = eleReact.children
    // domEle.setAttribute('href', eleReact.props.href)
    // domEle.setAttribute('target', eleReact.props.target)
    // container.appendChild(domEle)

    const domElement = document.createElement(eleReact.type)
    domElement.innerHTML = eleReact.children
    for(const prop in eleReact.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, eleReact.props[prop])
    }
    container.appendChild(domElement)
}

const eleReact = {
    type : 'a',
    props : {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google'
}

const mainContainer =  document.querySelector('#root')

customRender(eleReact, mainContainer)
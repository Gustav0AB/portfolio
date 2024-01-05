

export const Example = () => {

    const collapseHandle = event => {
        console.log(event)
        let collapseElm = document.getElementById(`${event.target.id}`);
        console.log(collapseElm)
        collapseElm.classList.contains('collapsable')?collapseElm.classList.remove('collapsable'):collapseElm.classList.add('collapsable');
    }

    return(
        <>
            <div className="examples-page">
                <div className="example-page--row">
                    <div id="crud-react" className="collapse-row" onClick={collapseHandle}>
                        <div className="collapse-row-title"><h3>React Crud</h3></div>
                        <div className="collapse-row--content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
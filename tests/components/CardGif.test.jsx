const { render, screen } = require("@testing-library/react");
const { CardGif } = require("../../src/components/CardGif");
const title = 'Saitama';
const url = 'https://cdn.pixabay.com/photo/2024/06/09/03/27/crown-8818017_1280.jpg'
describe(' Testt component CardGif', () =>{
    test('match whit snaptch', () => {
        const {container} = render( <CardGif title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })
    test('show img whit url and ALT', () => {
        render( <CardGif title={title} url={url} />)
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })
    test('show title in component', () => {
        render( <CardGif title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
    })
})
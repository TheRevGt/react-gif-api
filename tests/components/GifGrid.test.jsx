import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import {useFetchGifs} from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid/>', ()=>{
    const category = 'Saitama';

    test('should show loading init', () => {
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>)
        expect( screen.getByText('Cargando...'))
        expect(screen.getByText(category))
     })
     test('should items when load imagen whi use fetch', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'ABC1',
                title: 'Goku',
                url: 'https://localhost/Goku.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>)
        expect( screen.getAllByRole('img').length).toBe(2)
      })
})
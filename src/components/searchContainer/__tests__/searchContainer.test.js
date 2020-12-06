import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchContainer } from './../searchContainer'

describe('SearchContainer', () => {
    test('renders SearchContainer component', () => {
        render(<SearchContainer/>)

        screen.debug()
    })
})
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Search } from './../search'

describe('Search', () => {
    test('renders Search component', () => {
        render(<Search/>)

        screen.debug()
    })
})
import test from 'ava'

import { initialState } from './helpful/initialState'
import search from '../../client/reducers/search'
import { setSearch } from '../../client/actions/search'
import clothing from '../../client/reducers/clothing'
import { setClothes, setFilters, updateFilter } from '../../client/actions/clothing'
import possibleFilters from '../../client/reducers/possibleFilters'
import filterSelection from '../../client/reducers/filterSelection'

test('Default state for search is an empty string', t => {
  t.is(search(), '')
})

test('New search term updates state', t => {
  let state = ''
  let newState = search(state, setSearch('testing'))
  t.is(newState, 'testing')
})

test('Default state for clothing is an empty array', t => {
  t.is(clothing()[0], undefined)
})

test('Correct state is returned', t => {
  let state = []
  let newState = clothing(state, setClothes(['this is a drill']))
  t.is(newState[0], 'this is a drill')
})

test('Default state for filterSelection is object with empty arrays for all keys', t => {
  let freshState = possibleFilters()
  Object.keys(freshState).forEach((key) => {
    t.is(freshState[key].length, 0)
  })
})

test('New object passed in sets state', t => {
  let state = {size: [], style: [], brand: []}
  let newState = possibleFilters(state, setFilters(initialState.clothing))
  t.is(newState.size.length, 2)
  t.is(newState.brand.length, 1)
  t.is(newState.brand[0], 'Baby Factory')
  t.is(newState.style.length, 2)
})


test('Default state for filterSelection is object with empty arrays for all keys', t => {
  let freshState = filterSelection()
  Object.keys(freshState).forEach((key) => {
    t.is(freshState[key].length, 0)
  })
})

test('If filter not in state it is added', t => {
  let state = {size: [], style: [], brand: ['Baby Factory']}
  let newState = filterSelection(state, updateFilter('brand', 'Kmart'))
  t.is(newState.brand.length, 2)
  t.is(newState.brand[1], 'Kmart')
})

test('If filter already in state it is removed when updating', t => {
  let state = {size: [], style: [], brand: ['Baby Factory']}
  let newState = filterSelection(state, updateFilter('brand', 'Baby Factory'))
  t.is(newState.brand.length, 0)
})

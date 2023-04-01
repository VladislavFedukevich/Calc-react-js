import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 70% 30%;
  grid-template-areas:
    'display history'
    'keypad history';
  height: 100%;
  padding: 0 20px 0 20px;
`

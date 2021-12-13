import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import './index.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="text-3xl font-bold ">
          Пример компонента Button.tst с применением React + Tailwind + TypeScript
        </h1>
        <div className="inline-flex justify-between pt-3"> 
          <Button type="not-button" backgroundClass = "w-6 bg-slate-600 hover:bg-slate-700  focus:bg-slate-800 rounded-full"  width = {24} height = {24} />

          <Button type="button" backgroundClass = "bg-slate-600 hover:bg-slate-700  focus:bg-slate-800" width = {134} height = {34} svgSize={16} fontSize={"text-xs"}/> 
          <Button type="button" backgroundClass = "bg-slate-600 hover:bg-slate-700  focus:bg-slate-800" width = {144} height = {41} svgSize={16}/> 
          <Button type="button" backgroundClass = "bg-slate-600 hover:bg-slate-700  focus:bg-slate-800"  width = {168} height = {46} svgSize={20}/> 
          <Button type="button" backgroundClass = "bg-slate-600 hover:bg-slate-700  focus:bg-slate-800"  width = {168} height = {46} svgSize={20} disabled = {true}/> 
          
        </div>

        <div className="inline-flex justify-between"> 
          <Button type="not-button" backgroundClass = "w-6 bg-red-500 hover:bg-red-600  focus:bg-red-700 rounded-full" width = {24} height = {24}/>

          <Button type="button" backgroundClass = "bg-red-500 hover:bg-red-600  focus:bg-red-700" width = {134} height = {34} svgSize={16} fontSize={"text-xs"}/>
          <Button type="button" backgroundClass = "bg-red-500 hover:bg-red-600  focus:bg-red-700" width = {144} height = {41} svgSize={16}/>
          <Button type="button" backgroundClass = "bg-red-500 hover:bg-red-600  focus:bg-red-700" width = {168} height = {46} svgSize={20}/>
          <Button type="button" backgroundClass = "bg-red-500 hover:bg-red-600  focus:bg-red-700" width = {168} height = {46} svgSize={20} disabled = {true}/>
          
        </div>
      
      </header>
    </div>
  );
}

export default App;

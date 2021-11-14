import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const App=(props)=> {

  return (
  <>
		<div className="container-fluid">
			<h4>イベント作成</h4>

			<form>
				<div className="form-group">
					<label htmlFor="formEventTitle">タイトル</label>
					<input id="formEventTitle" className="form-control"/>
				</div>

				<div className="form-group">
					<label htmlFor="formEventBody">ボディー</label>
					<textarea id="formEventBody" className="form-control"/>
				</div>

				<button className="btn btn-primary">作成</button>
				<button className="btn btn-danger">削除</button>
				<button className="btn btn-danger">全て削除</button>
			</form>

			<h4>イベント一覧</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル</th>
						<th>ボディー</th>
						<th></th>
					</tr>
				</thead>
			</table>
		</div>

	</>
  )
}

App.defaultProps={
	name:'',
	price:1000
}
export default App

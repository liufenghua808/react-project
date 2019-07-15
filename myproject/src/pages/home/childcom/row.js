import React, { Component } from 'react';
// import './bootstrap.min.css';
//import './css/styles.css';
import './css/row.css';

class Row extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="row-context">
				<div className="row">
					<div className="col-md-4">
						<div className="widget-area lochana-box-shadow color-red">
							<div className="widget-left">
								<span className="ti-user"></span>
							</div>
							<div className="widget-right">
								<h4 className="wiget-title">病人</h4>
								<span className="numeric color-red">348</span>
								<p className="inc-dec mb-0"><span className="ti-angle-up"></span> +20% 增长</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="widget-area lochana-box-shadow color-green">
							<div className="widget-left">
								<span className="ti-bar-chart"></span>
							</div>
							<div className="widget-right">
								<h4 className="wiget-title">出诊</h4>
								<span className="numeric color-green">1585</span>
								<p className="inc-dec mb-0"><span className="ti-angle-down"></span> -15% 减少</p>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="widget-area lochana-box-shadow color-yellow">
							<div className="widget-left">
								<span className="ti-money"></span>
							</div>
							<div className="widget-right">
								<h4 className="wiget-title">收入</h4>
								<span className="numeric color-yellow">$7300</span>
								<p className="inc-dec mb-0"><span className="ti-angle-up"></span> +10% 增长</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row1">

					<div className="col-md-6">
						<div className="widget-area-2 lochana-box-shadow">
							<h3 className="widget-title">出诊按年统计</h3>
							<div id="lineMorris" className="chart-home"></div>
						</div>
					</div>


					<div className="col-md-6">
						<div className="widget-area-2 lochana-box-shadow">
							<h3 className="widget-title"> 病人按年统计</h3>
							<div id="barMorris" className="chart-home"></div>
						</div>
					</div>

				</div>


				<div className="row2">

					<div className="col-md-12">
						<div className="widget-area-2 lochana-box-shadow">
							<h3 className="widget-title">出诊</h3>
							<div className="table-responsive">
								<table className="table table-bordered table-striped">
									<thead>
										<tr>
											<th>名人姓名</th>
											<th>医生</th>
											<th>检查</th>
											<th>日期</th>
											<th>时间</th>
											<th>状态</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Rajesh</td>
											<td>Manoj Kumar</td>
											<td>牙科</td>
											<td>12-10-2018</td>
											<td>12:10PM</td>
											<td>
												<span className="badge badge-success">Completed</span>
											</td>
										</tr>
										<tr>
											<td>Riya</td>
											<td>Daniel </td>
											<td>皮肤科</td>
											<td>12-10-2018</td>
											<td>1:10PM</td>
											<td>
												<span className="badge badge-warning">Pending</span>
											</td>
										</tr>
										<tr>
											<td>Siri</td>
											<td>Daniel </td>
											<td>皮肤科</td>
											<td>12-10-2018</td>
											<td>1:30PM</td>
											<td>
												<span className="badge badge-danger">Cancelled</span>
											</td>
										</tr>
										<tr>
											<td>Rajesh</td>
											<td>Manoj Kumar</td>
											<td>牙科</td>
											<td>12-10-2018</td>
											<td>12:10PM</td>
											<td>
												<span className="badge badge-success">Completed</span>
											</td>
										</tr>
										<tr>
											<td>Riya</td>
											<td>Daniel </td>
											<td>皮肤科</td>
											<td>12-10-2018</td>
											<td>1:10PM</td>
											<td>
												<span className="badge badge-warning">Pending</span>
											</td>
										</tr>
										<tr>
											<td>Siri</td>
											<td>Daniel </td>
											<td>皮肤科</td>
											<td>12-10-2018</td>
											<td>1:30PM</td>
											<td>
												<span className="badge badge-danger">Cancelled</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>

				</div>

				<div className="row3">

					<div className="col-sm-6">
						<div className="widget-area-2 lochana-box-shadow">
							<h3 className="widget-title">出诊 状态</h3>
							<div id="donutMorris" className="chart-home"></div>
						</div>
					</div>

					<div className="col-md-6">
						<div className="widget-area-2 progress-status lochana-box-shadow">
							<h3 className="widget-title">医生情况</h3>
							<div className="table-responsive">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>医生</th>
											<th>科室</th>
											<th>情况</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Rajesh</td>
											<td>牙科</td>
											<td>
												<span className="badge badge-success">可出诊</span>
											</td>
										</tr>
										<tr>
											<td>Riya</td>
											<td>皮肤科</td>
											<td>
												<span className="badge badge-warning">休假</span>
											</td>
										</tr>
										<tr>
											<td>Siri</td>
											<td>眼科</td>
											<td>
												<span className="badge badge-danger">不可出诊</span>
											</td>
										</tr>
										<tr>
											<td>Rajesh</td>
											<td>牙科</td>
											<td>
												<span className="badge badge-success">可出诊</span>
											</td>
										</tr><tr>
											<td>Rajesh</td>
											<td>牙科</td>
											<td>
												<span className="badge badge-success">可出诊</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
					</div>


				</div>
			</div>
		);
	}
}

export default Row;
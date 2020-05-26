function calcWindow() {
    var winWidth = document.body.clientWidth;
    console.log(winWidth)
    var iWidth = winWidth / 375;
    var width = 200 * iWidth,
        height = 130 * iWidth;
    var rectPadding = 4 * iWidth
    var left = 13 * iWidth;
    var right = 20 * iWidth;
    var bottom = 20 * iWidth;
    var innerRadius = 95 * iWidth;
    var outerRadius = 100 * iWidth;
    return {
        "width": width,
        "height": height,
        "iWidth": iWidth,
        "rectPadding": rectPadding,
        "left": left,
        "right": right,
        "bottom": bottom,
        "innerRadius": innerRadius,
        "outerRadius": outerRadius
    };
}

function dashboard(el, number) {
    console.log(555)
    var windowSize = calcWindow();
    var width = windowSize.width,
        height = windowSize.height,
        innerRadiusOne = windowSize.innerRadius,
        outerRadiusOne = windowSize.outerRadius,
        arcStart = -Math.PI * 2 / 3.3,
        arcStartHalf = -Math.PI / 2,
        arcEnd = Math.PI * 2 / 3.3,
        arcEndHalf = Math.PI / 2;
    var padding = {
        left: windowSize.left,
        right: windowSize.right
    }
    var svg = d3.select('.' + el + '')
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "dashboard")
    var data = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var data2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ]
    var data3 = number;
    var data4 = 10;
    var data5 = [1]
    var percent = data3 / data4;
    var currentAngle = -Math.PI / 2 + Math.PI * percent;
    // var data3 = 65;
    // var data4 = 100;
    //创建一个arc方法，给出一个给定的角度的SVG path
    var arcOne = d3.arc()
        .innerRadius(innerRadiusOne)
        .outerRadius(outerRadiusOne)
        .startAngle(arcStart);
    var arcTwo = d3.arc()
        .innerRadius(89 * windowSize.iWidth)
        .outerRadius(90 * windowSize.iWidth)
        .startAngle(arcStart);
    var arcThree = d3.arc()
        .innerRadius(65 * windowSize.iWidth)
        .outerRadius(66 * windowSize.iWidth)
        .startAngle(arcStart / 5 * 4.5);
    // var arcFour = d3.arc()
    //   .innerRadius(15 * windowSize.iWidth)
    //   .outerRadius(65 * windowSize.iWidth)
    //   .startAngle(arcStartHalf);
    var arcFive = d3.arc()
        .innerRadius(14 * windowSize.iWidth)
        .outerRadius(15 * windowSize.iWidth)
        .startAngle(arcStartHalf);
    var arcSix = d3.arc()
        .innerRadius(15 * windowSize.iWidth)
        .outerRadius(65 * windowSize.iWidth)
        .startAngle(-Math.PI / 2);
    var arcSeven = d3.arc()
        .innerRadius(3 * windowSize.iWidth)
        .outerRadius(0)
        .startAngle(-Math.PI);
    var arcNum = d3.arc()
        .innerRadius(0)
        .outerRadius(18 * windowSize.iWidth)
        .startAngle(-Math.PI);

    var arcColor = d3.arc()
        .innerRadius(70 * windowSize.iWidth)
        .outerRadius(85 * windowSize.iWidth)
        .startAngle(-Math.PI / 2);
    // var line = d3.line()
    //     .x(0)
    //     .y(function (d) {
    //         return innerRadius;
    //     })
    // 设置渐变色
    var gradient = svg.append("defs")
        .append("linearGradient")
        .attr("id", "gradient")
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "0%")
        .attr("y2", "0%")
    gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#EFFAFE")
        .attr("stop-opacity", 0.1);
    gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#CEEEFA")
        .attr("stop-opacity", 1);
    var gradientNew = svg.append("defs")
        .append("linearGradient")
        .attr("id", "gradientNew")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%")
    gradientNew.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#fffd5d")
        .attr("stop-opacity", 1);
    gradientNew.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#7cd1f1")
        .attr("stop-opacity", 1);
    //将SVG转换到远点中心
    var g = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 1.3 + ")");
    var num = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2.1 + ")");
    var score = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 * 1.8 + ")");
    var smallCircle = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2.7 * 2.1 + ")");
    var smallCircleLeft1 = svg.append("g")
        .attr("transform", "translate(" + (width / 2 - padding.left / 2) + "," + height / 2.7 * 2.1 + ")");
    var smallCircleLeft2 = svg.append("g")
        .attr("transform", "translate(" + (width / 2 - padding.left) + "," + height / 2.7 * 2.1 + ")");
    var smallCircleRight1 = svg.append("g")
        .attr("transform", "translate(" + (width / 2 + padding.left / 2) + "," + height / 2.7 * 2.1 + ")");
    var smallCircleRight2 = svg.append("g")
        .attr("transform", "translate(" + (width / 2 + padding.left) + "," + height / 2.7 * 2.1 + ")");
    var halfCircle = svg.append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 3 * 1.8 + ")");
    var rects = svg.append("g")
    // .attr("transform", "translate(" + (width / 2 - padding.right) + "," + height / 4 * 2.1 + ")");
    var group = g.append("g")
    //添加仪表盘数字
    // var valueLabel = g.append("text")
    //     .attr("class", "dashboardValue")
    //     .style("alignment-baseline", "central")
    //     .style("text-anchor", "middle")
    //     .text("65评分")
    //添加背景圆弧
    // 灰色
    g.append("path")
        .datum({
            endAngle: arcEnd
        }) //传递endAngle参数到arc
        .style("fill", "#DDD")
        .attr("d", arcOne)
    g.append("path")
        .datum({
            endAngle: arcEnd
        }) //传递endAngle参数到arc
        .style("fill", "#DDD")
        .attr("d", arcTwo);
    g.append("path")
        .datum({
            endAngle: arcEnd / 5 * 4.5
        }) //传递endAngle参数到arc
        .style("fill", "#DDD")
        .attr("d", arcThree);
    // g.append("path")
    //   .datum({
    //     endAngle: arcEndHalf
    //   }) //传递endAngle参数到arc
    //   .style("fill", "url(#gradient)")
    //   .attr("d", arcFour);
    g.append("path")
        .datum({
            endAngle: arcEndHalf
        }) //传递endAngle参数到arc
        .style("fill", "#ddd")
        .attr("d", arcFive);
    var change = g.append("path")
        .datum({
            endAngle: -Math.PI / 2
        }) //传递endAngle参数到arc
        .style("fill", "url(#gradient)")
        // .attr("stroke", "#ddd")
        .attr("d", arcSix);
    num.append("path")
        .datum({
            endAngle: Math.PI
        }) //传递endAngle参数到arc
        .style("fill", "#fff")
        .attr("stroke", "#979797")
        .attr("d", arcNum);
    num.append("text")
        .style("alignment-baseline", "central")
        .style("text-anchor", "middle")
        .style("transform", "scale(1.6)")
        .text(data3);
    score.append("text")
        .style("alignment-baseline", "central")
        .style("text-anchor", "middle")
        // .style("transform", "scale(1.8)")
        .style("fill", "#ccc")
        .text("评分");
    smallCircle.append("path")
        .datum({
            endAngle: Math.PI
        }) //传递endAngle参数到arc
        .style("fill", "#eee")
        .attr("d", arcSeven);
    smallCircleLeft1.append("path")
        .datum({
            endAngle: Math.PI
        }) //传递endAngle参数到arc
        // .style("transform","translate(-2,0)")
        .style("fill", "#eee")
        .attr("d", d3.arc()
            .innerRadius(2 * windowSize.iWidth)
            .outerRadius(0)
            .startAngle(-Math.PI));
    smallCircleLeft2.append("path")
        .datum({
            endAngle: Math.PI
        }) //传递endAngle参数到arc
        .style("fill", "#eee")
        .attr("d", d3.arc()
            .innerRadius(2 * windowSize.iWidth)
            .outerRadius(0)
            .startAngle(-Math.PI));
    smallCircleRight1.append("path")
        .datum({
            endAngle: Math.PI
        }) //传递endAngle参数到arc
        .style("fill", "#eee")
        .attr("d", d3.arc()
            .innerRadius(2 * windowSize.iWidth)
            .outerRadius(0)
            .startAngle(-Math.PI));
    smallCircleRight2.append("path")
        .datum({
            endAngle: Math.PI
        }) //传递endAngle参数到arc
        .style("fill", "#eee")
        .attr("d", d3.arc()
            .innerRadius(2 * windowSize.iWidth)
            .outerRadius(0)
            .startAngle(-Math.PI));

    rects.append("rect")
        .attr("x", padding.right * 2)
        .attr("y", height / 2.7 * 2.08)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("width", padding.right * 2)
        .attr("height", 3 * windowSize.iWidth)
        .attr("fill", "#eee")
    rects.append("rect")
        .attr("x", padding.right * 6)
        .attr("y", height / 2.7 * 2.08)
        .attr("rx", 3)
        .attr("ry", 3)
        .attr("width", padding.right * 2)
        .attr("height", 3 * windowSize.iWidth)
        .attr("fill", "#eee")
    for (let i = 0; i < 10; i++) {
        var arcBg = d3.arc()
            .innerRadius(70 * windowSize.iWidth)
            .outerRadius(85 * windowSize.iWidth)
            .startAngle(-Math.PI / 2 + Math.PI * 0.09 * i);
        group.append("path")
            .datum({
                endAngle: -Math.PI / 2 + Math.PI * 0.09 * (i + 1)
            }) //传递endAngle参数到arc  - Math.PI / 20
            .style("fill", "#fff")
            .style("stroke", "#ddd")
            .style("stroke-width", 1)
            .style("transform", function () {
                return "rotate(" + 2 * i + "deg)"
            })
            .attr("d", arcBg)
    }
    var foreground = group.append("path")
        .datum({
            endAngle: -Math.PI / 2
        }) //传递endAngle参数到arc
        .style("fill", "url(#gradientNew)")
        .attr("d", arcColor);
    foreground.transition()
        .duration(2000)
        // .ease(d3.easeElastic) //设置来回弹动的效果
        .attrTween("d", arcTween(currentAngle, arcColor));
    change.transition()
        .duration(2000)
        // .ease(d3.easeElastic) //设置来回弹动的效果
        .attrTween("d", arcTween((currentAngle), arcSix));
    // 让圆变成点点点的效果
    g.append("g").attr("class", "color").selectAll("line")
        .data(data2)
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", -innerRadiusOne)
        .attr("y2", -(innerRadiusOne + 5 * windowSize.iWidth))
        .style("stroke", "#fff")
        .style("stroke-width", 6 * windowSize.iWidth)
        .attr("transform", function (d, i) {
            return 'rotate(' + ((-120) + 4 * i) + ')'
        });
    g.append("g").selectAll("line")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", -70 * windowSize.iWidth)
        .attr("y2", -(85 * windowSize.iWidth))
        .style("stroke", "#fff")
        .style("stroke-width", 2)
        .attr("transform", function (d, i) {
            return 'rotate(' + ((-72.8) + 18.2 * i) + ')'
        });
    g.append("g").selectAll("line")
        .data(data5)
        .enter()
        .append("line")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", 0)
        .attr("y2", -(65 * windowSize.iWidth))
        .style("stroke", "#ddd")
        .style("stroke-width", 1)
        .attr("transform", function () {
            return 'rotate(' + (-90) + ')'
        })
        .transition()
        .duration(2000)
        .attr("transform", function () {
            return 'rotate(' + ((-90) + 180 * percent) + ')'
        });

    function arcTween(newAngle, arc) {
        let self = this
        return function (d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle); //在两个值间找一个插值
            return function (t) {
                d.endAngle = interpolate(t); //根据 transition 的时间 t 计算插值并赋值给endAngle
                return arc(d); //返回新的“d”属性值
            };
        };
    }
}